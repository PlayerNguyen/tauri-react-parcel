// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
async fn ping() -> Result<String, ()> {

  // Note that the return value must be wrapped in `Ok()` now.
  Ok(format!("Pong"))
}
fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![ping])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
