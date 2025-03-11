// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod api;
use api::requests;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            requests::get_top_anime,
            requests::trending_anime,
            requests::upcoming_anime,
            requests::hero_movie,
            requests::relation_anime,
            requests::details_anime,
            requests::search_anime,
        ])
        .run(tauri::generate_context!())
        .expect("Error while running Seijaku");
}
