<?php
/**
 * Theme Functions (Child Theme Custom)
 */

/**
 * Enqueue parent & child styles + custom JS
 */
function kadence_child_enqueue_files() {
    // Parent CSS
    wp_enqueue_style(
        'kadence-parent-style',
        get_template_directory_uri() . '/style.css'
    );

    // Child CSS with cache busting
    wp_enqueue_style(
        'kadence-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('kadence-parent-style'),
        filemtime(get_stylesheet_directory() . '/style.css')
    );

    // Custom JS (if exists)
    if ( file_exists( get_stylesheet_directory() . '/js/custom.js' ) ) {
        wp_enqueue_script(
            'kadence-child-js',
            get_stylesheet_directory_uri() . '/js/custom.js',
            array('jquery'),
            filemtime(get_stylesheet_directory() . '/js/custom.js'),
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'kadence_child_enqueue_files');


// post date and reading time
function post_info_combined_shortcode($atts) {
    global $post;

    if (!$post) return '';

    // Last updated date
    $updated_date = get_the_modified_date('F j, Y', $post->ID);

    //  Reading time (estimate: 200 words per min)
    $word_count = str_word_count(strip_tags($post->post_content));
    $reading_time = ceil($word_count / 200); // minutes

    // Output HTML (styled with Font Awesome icons, views removed)
    $output = '<div class="post-info-combined" style="padding:12px 15px; margin:20px 0; display:flex; gap:20px; font-size:14px; color:#555; flex-wrap: wrap;">';
    
    // Updated Date
    $output .= '<span style="display:flex; align-items:center; gap:5px;"><i class="fa fa-calendar-alt" aria-hidden="true"></i> Updated: ' . $updated_date . '</span>';
    
    // Reading Time
    $output .= '<span style="display:flex; align-items:center; gap:5px;"><i class="fa fa-clock" aria-hidden="true"></i> ' . $reading_time . ' Min</span>';

    $output .= '</div>';

    return $output;
}
add_shortcode('post_info_combined', 'post_info_combined_shortcode');

// breadcumb
// Dynamic breadcrumb shortcode
function dynamic_breadcrumb_shortcode() {
    global $post;

    if (!is_singular()) return ''; // Only for single posts/pages

    $separator = ' &rarr; '; // Arrow
    $breadcrumb = '<div class="custom-breadcrumb" style="font-size:14px; margin-bottom:15px;">';

    // Home link
    $breadcrumb .= '<a href="' . home_url() . '">Home</a>' . $separator;

    // Blog page or posts page
    if(get_option('page_for_posts')) {
        $posts_page_id = get_option('page_for_posts');
        $breadcrumb .= '<a href="' . get_permalink($posts_page_id) . '">' . get_the_title($posts_page_id) . '</a>' . $separator;
    }

    // Categories
    $categories = get_the_category($post->ID);
    if (!empty($categories)) {
        $last_cat = end($categories); // Last category
        $cat_parents = get_category_parents($last_cat, true, $separator);
        $breadcrumb .= $cat_parents;
    }

    // Current post/page title
    $breadcrumb .= '<span>' . get_the_title($post->ID) . '</span>';

    $breadcrumb .= '</div>';

    return $breadcrumb;
}
add_shortcode('dynamic_breadcrumb', 'dynamic_breadcrumb_shortcode');


// Facts checked by: Custom Author Name
function facts_checked_by_author_box_shortcode($atts) {
    $atts = shortcode_atts(
        array(
            'name' => 'Default Author', // Agar name na diya ho to default
        ), 
        $atts, 
        'facts_checked_by_author'
    );

    $author_name = esc_html($atts['name']);
    $author_avatar = get_avatar(0, 60); // 0 = default avatar

    $output = '<div class="facts-checked-author-box" style="padding:0px 8px; display:flex; align-items:center;">';
    $output .= '<div class="image-box" style="margin-right:10px;">' . $author_avatar . '</div>';
    $output .= '<div>';
    $output .= '<p style="margin-left: 16px;">Facts checked by: ' . $author_name . '</p>';
    $output .= '</div>';
    $output .= '</div>';

    return $output;
}
add_shortcode('facts_checked_by_author', 'facts_checked_by_author_box_shortcode');


function written_by_author_box_shortcode($atts) {
    global $post;

    if (!$post) return '';

    $author_id = $post->post_author;
    $author_name = get_the_author_meta('display_name', $author_id);
    $author_avatar = get_avatar($author_id, 60);

    $output = '<div class="written-by-author-box" style=" padding:0px 8px; display:flex; align-items:center;">';
    $output .= '<div class="image-box" style="margin-right:10px;">' . $author_avatar . '</div>';
    $output .= '<div>';
    $output .= '<p style="margin-left: 16px;">Written by: ' . $author_name . '</p>';
    $output .= '</div>';
    $output .= '</div>';

    return $output;
}
add_shortcode('written_by_author', 'written_by_author_box_shortcode');

// author box
function single_post_author_box_shortcode($atts) {
    global $post;

   // Sirf single post ke liye check
    if (!$post) return '';

    $author_id = $post->post_author;
    $author_name = get_the_author_meta('display_name', $author_id);
    $author_bio = get_the_author_meta('description', $author_id);
    $author_avatar = get_avatar($author_id, 80);

    $output = '<div class="single-author-box" style="border:0px solid #ccc; padding:15px; margin-top:20px;">';
    $output .= '<div style="float:left; margin-right:15px;">' . $author_avatar . '</div>';
    $output .= '<div>';
    $output .= '<h4>' . $author_name . '</h4>';
    $output .= '<p>' . $author_bio . '</p>';
    $output .= '</div>';
    $output .= '<div style="clear:both;"></div>';
    $output .= '</div>';

    return $output;
}
add_shortcode('single_author_box', 'single_post_author_box_shortcode');



// 1️⃣ Add IDs to H2 in post content
function add_toc_ids_to_h2($content) {
    if (is_singular('post')) {
        preg_match_all('/<h2.*?>(.*?)<\/h2>/i', $content, $matches);
        if (!empty($matches[1])) {
            foreach ($matches[1] as $index => $heading) {
                $anchor_id = 'toc-heading-' . $index;
                $content = preg_replace('/<h2.*?>' . preg_quote($heading, '/') . '<\/h2>/i', '<h2 id="' . $anchor_id . '">' . $heading . '</h2>', $content, 1);
            }
        }
    }
    return $content;
}
add_filter('the_content', 'add_toc_ids_to_h2');

// 2️⃣ Enqueue TOC Scroll Script
function enqueue_toc_scroll_script() {
    wp_enqueue_script(
        'toc-scroll',
        get_template_directory_uri() . '/js/toc-scroll.js', // Parent theme ke liye get_template_directory_uri()
        array(),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_toc_scroll_script');

// Shortcode for "In This Article" Box
function in_this_article_shortcode() {
    global $post;

    if (!$post) return '';

    $content = $post->post_content;
    preg_match_all('/<h2.*?>(.*?)<\/h2>/i', $content, $matches);

    if (empty($matches[1])) return '';

    $output = '<div class="in-this-article-box" style="padding:15px; margin:20px 0;">';
    $output .= '<h4>In this article</h4>';
    $output .= '<ul style="list-style:none; padding-left:0;">';

    foreach ($matches[1] as $index => $heading) {
        $anchor_id = 'toc-heading-' . $index;

        // No href → use span with data-target-id
        $output .= '<li><span data-target-id="' . esc_attr($anchor_id) . '" class="toc-link" style="cursor:pointer;">' 
                 . esc_html($heading) . '</span></li>';
    }

    $output .= '</ul></div>';

    return $output;
}
add_shortcode('in_this_article', 'in_this_article_shortcode');



