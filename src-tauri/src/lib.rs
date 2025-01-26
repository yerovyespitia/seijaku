// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct AnimeData {
    pagination: serde_json::Value,
    data: serde_json::Value,
}

#[tauri::command]
async fn get_top_anime(limit: u32) -> Result<AnimeData, String> {
    let client = reqwest::Client::new();

    // Jikan API - Top Animes
    let url = format!(
        "https://api.jikan.moe/v4/top/anime?page=1&limit={}&sfw=true",
        limit
    );

    let response = client
        .get(&url)
        .send()
        .await
        .map_err(|e| format!("Error response: {}", e))?;

    // Parse response
    let response_data: AnimeData = response
        .json()
        .await
        .map_err(|e| format!("Error parse: {}", e))?;

    Ok(response_data)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![get_top_anime])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
