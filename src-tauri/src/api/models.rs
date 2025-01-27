use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AnimeResponse {
    pub pagination: Pagination,
    pub data: Vec<Anime>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Pagination {
    pub last_visible_page: u32,
    pub has_next_page: bool,
    pub current_page: u32,
    pub items: PaginationItems,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PaginationItems {
    pub count: u32,
    pub total: u32,
    pub per_page: u32,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Anime {
    pub mal_id: u32,
    pub url: String,
    pub images: AnimeImages,
    pub trailer: Trailer,
    pub approved: bool,
    pub titles: Vec<Title>,
    pub title: String,
    pub title_english: Option<String>,
    pub title_japanese: Option<String>,
    #[serde(default)]
    pub title_synonyms: Vec<String>,
    #[serde(rename = "type")]
    pub anime_type: Option<String>,
    pub source: Option<String>,
    pub episodes: Option<u32>,
    pub status: String,
    pub airing: bool,
    pub aired: Aired,
    pub duration: String,
    pub rating: Option<String>,
    pub score: Option<f64>,
    pub scored_by: Option<u32>,
    pub rank: Option<u32>,
    pub popularity: u32,
    pub members: u32,
    pub favorites: u32,
    pub synopsis: Option<String>,
    pub background: Option<String>,
    pub season: Option<String>,
    pub year: Option<u32>,
    pub broadcast: Broadcast,
    #[serde(default)]
    pub producers: Vec<MalEntity>,
    #[serde(default)]
    pub licensors: Vec<MalEntity>,
    #[serde(default)]
    pub studios: Vec<MalEntity>,
    #[serde(default)]
    pub genres: Vec<MalEntity>,
    #[serde(default)]
    pub explicit_genres: Vec<serde_json::Value>,
    #[serde(default)]
    pub themes: Vec<serde_json::Value>,
    #[serde(default)]
    pub demographics: Vec<MalEntity>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AnimeImages {
    pub jpg: ImageUrls,
    pub webp: ImageUrls,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ImageUrls {
    pub image_url: String,
    pub small_image_url: String,
    pub large_image_url: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Trailer {
    pub youtube_id: Option<String>,
    pub url: Option<String>,
    pub embed_url: Option<String>,
    pub images: TrailerImages,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TrailerImages {
    pub image_url: Option<String>,
    pub small_image_url: Option<String>,
    pub medium_image_url: Option<String>,
    pub large_image_url: Option<String>,
    pub maximum_image_url: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Title {
    #[serde(rename = "type")]
    pub title_type: String,
    pub title: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Aired {
    pub from: Option<String>,
    pub to: Option<String>,
    pub prop: AiredProp,
    pub string: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AiredProp {
    pub from: AiredDate,
    pub to: AiredDate,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AiredDate {
    pub day: Option<u32>,
    pub month: Option<u32>,
    pub year: Option<u32>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Broadcast {
    pub day: Option<String>,
    pub time: Option<String>,
    pub timezone: Option<String>,
    pub string: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MalEntity {
    pub mal_id: u32,
    #[serde(rename = "type")]
    pub entity_type: String,
    pub name: String,
    pub url: String,
}
