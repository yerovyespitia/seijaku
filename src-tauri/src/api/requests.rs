use serde::{Deserialize, Serialize};
use tauri::command;

#[derive(Serialize, Deserialize)]
pub struct AnimeData {
    pagination: serde_json::Value,
    data: serde_json::Value,
}

#[command]
pub async fn hero_movie(limit: u32) -> Result<AnimeData, String> {
    let client = reqwest::Client::new();

    // Jikan API - Hero movies
    let url = format!(
        "https://api.jikan.moe/v4/top/anime?page=1&limit={}&sfw=true&type=movie&filter=favorite",
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

#[command]
pub async fn upcoming_anime(limit: u32) -> Result<AnimeData, String> {
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

#[command]
pub async fn trending_anime(limit: u32) -> Result<AnimeData, String> {
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

#[command]
pub async fn get_top_anime(limit: u32) -> Result<AnimeData, String> {
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

#[command]
pub async fn search_anime(search: String, limit: u32) -> Result<AnimeData, String> {
    let client = reqwest::Client::new();

    // Jikan API - Search Animes
    let url = format!(
        "https://api.jikan.moe/v4/anime?q={}&limit={}&sfw=true",
        search, limit
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
