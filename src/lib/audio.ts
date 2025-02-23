class AudioPlayer {
  private static instance: AudioPlayer;
  private audioFiles = {
    transitionUp: "/static/audio/transition_up.mp3",
    transitionDown: "/static/audio/transition_down.mp3",
    select: "/static/audio/select.mp3",
    swipe: "/static/audio/swipe_01.mp3",
    swipe2: "/static/audio/swipe_03.mp3",
    tap: "/static/audio/tap.mp3",
  };
  private audioCache: Record<string, HTMLAudioElement> = {};

  private constructor() {}

  public static getInstance(): AudioPlayer {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
    }
    return AudioPlayer.instance;
  }

  public play(key: keyof typeof this.audioFiles) {
    if (!this.audioCache[key]) {
      this.audioCache[key] = new Audio(this.audioFiles[key]);
    }
    this.audioCache[key].play();
  }

  public preload(keys: (keyof typeof this.audioFiles)[]) {
    keys.forEach((key) => {
      if (!this.audioCache[key]) {
        this.audioCache[key] = new Audio(this.audioFiles[key]);
      }
    });
  }
}

export const audioPlayer = AudioPlayer.getInstance();
