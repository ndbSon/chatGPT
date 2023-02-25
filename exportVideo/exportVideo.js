const path = require("path");
const colors = require("colors");
const fs = require("fs");
const mp3Duration = require("mp3-duration");
const {
  FFScene,
  FFText,
  FFVideo,
  FFAlbum,
  FFImage,
  FFCreator,
  FFAudio,
  FFSubtitle,
} = require("ffcreator");
const outputDir = path.join(__dirname, "./output/");
const cacheDir = path.join(__dirname, "./cache/");
const width = 720;
const height = 1280;

let { data, image } = JSON.parse(fs.readFileSync("data.json"));
let nameFileExport = (Math.random() + 1).toString(36).substring(7);

const getTimeTotal = async (data) => {
  let totalTime = 0;
  let arrTimeStart = [];
  let arrTimeDuration = [];
  for (const item of data) {
    let duration = await mp3Duration(item.mp3);
    arrTimeStart.push(Number(totalTime));
    arrTimeDuration.push(Number(duration));
    totalTime = Number(totalTime) + Number(duration);
  }
  return { totalTime, arrTimeStart, arrTimeDuration };
};

const ExportVideo = async () => {
  const creator = new FFCreator({
    cacheDir,
    outputDir,
    width: width,
    height: height,
  });
  console.log(path.join(__dirname, `ffmpeg/bin//ffmpeg.exe`));
  FFCreator.setFFmpegPath(path.join(__dirname, `ffmpeg/bin//ffmpeg.exe`)); //("C:/ffmpeg/bin//ffmpeg.exe");
  FFCreator.setFFprobePath(path.join(__dirname, `ffmpeg/bin//ffprobe.exe`)); //("C:/ffmpeg/bin//ffprobe.exe");

  let { totalTime, arrTimeStart, arrTimeDuration } = await getTimeTotal(data);

  // Create scene
  const scene = new FFScene();
  scene.setBgColor("#ffcc22");

  // Create a multi-photo Album
  const album = new FFAlbum({
    list: image, // Picture collection for album
    x: width / 2,
    y: height / 2,
    width: width,
    height: height,
    showCover: true,
    loop: true,
  });
  album.setTransition("random"); // Set album switching animation
  album.setDuration(totalTime / image.length); // Set the stay time of a single sheet
  album.setTransTime(1.5); // Set the duration of a single animation
  scene.addChild(album);

  for (const [index, value] of data.entries()) {
    //add audio
    const sceneAudio = new FFAudio({
      path: value.mp3,
      loop: false,
      start: arrTimeStart[index],
      volume: 1,
    });
    creator.addAudio(sceneAudio);
    //add text
    const subtitle = new FFSubtitle({
      comma: true, // 是否逗号分割
      backgroundColor: "#000000",
      color: "#fff",
      fontSize: 24,
      x: width / 2,
      y: height / 2 + 350,
      textAlign: "center",
    });
    subtitle.frameBuffer = 20;
    subtitle.setStyle({
      fontFamily: "Arial",
      fontStyle: "italic",
      fontWeight: "bold",
      strokeThickness: 8,
      wordWrap: true,
      wordWrapWidth: width - 10,
    });
    subtitle.setText(value.text);
    //   let tts = path.join(__dirname, `${value.mp3});
    //   console.log("tts: ", tts);

    subtitle.setSpeech(path.join(__dirname, `${value.mp3}`));
    subtitle.setStartTime(arrTimeStart[index]);
    scene.addChild(subtitle);
    // await showEachWod(value.text, arrTimeDuration[index], scene);
  }

  scene.setDuration(totalTime);
  //   scene.setTransition("FastSwitch", 1.5);
  creator.addChild(scene);

  creator.output(path.join(__dirname, `./output/${nameFileExport}.mp4`));
  creator.start(); // Start processing
  creator.closeLog(); // Close log (including perf)

  creator.on("start", () => {
    console.log(`FFCreator start`);
  });
  creator.on("error", (e) => {
    console.log(`FFCreator error: ${JSON.stringify(e)}`);
  });
  creator.on("progress", (e) => {
    console.log(
      colors.yellow(`FFCreator progress: ${e.state} ${(e.percent * 100) >> 0}%`)
    );
  });
  creator.on("complete", (e) => {
    console.log(
      colors.magenta(
        `FFCreator completed: \n USEAGE: ${e.useage} \n PATH: ${e.output} `
      )
    );
  });
};

ExportVideo();
