// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct AnimeData {
    pagination: serde_json::Value,
    data: serde_json::Value,
}

#[tauri::command]
async fn airing_movie(limit: u32) -> Result<AnimeData, String> {
    let client = reqwest::Client::new();

    // Jikan API - Airing movies
    let url = format!(
        "https://api.jikan.moe/v4/top/anime?page=1&limit={}&sfw=true&type=movie&filter=airing",
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

#[tauri::command]
async fn upcoming_anime(limit: u32) -> Result<AnimeData, String> {
    let client = reqwest::Client::new();

    // Jikan API - Upcoming animes
    let url = format!(
        "https://api.jikan.moe/v4/top/anime?page=1&limit={}&sfw=true&filter=upcoming",
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

#[tauri::command]
async fn trending_anime(limit: u32) -> Result<AnimeData, String> {
    let client = reqwest::Client::new();

    // Jikan API - Trending animes
    let url = format!(
        "https://api.jikan.moe/v4/top/anime?&filter=airing&limit={}&sfw=true&type=tv",
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
        .invoke_handler(tauri::generate_handler![
            get_top_anime,
            trending_anime,
            upcoming_anime,
            airing_movie
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
