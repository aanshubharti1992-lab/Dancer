

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1240187266417295393", ""], 
  mongodbUri : "mongo  mongodb+srv://aanshubharti1992_db_user:<db_password>@cluster0.hekskia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glace",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
