class AudioPlayer {
  private static instance: AudioPlayer;
  private audioFiles = {
    transitionUp: "/static/audio/transition_up.wav",
    transitionDown: "/static/audio/transition_down.wav",
    select: "/static/audio/select.wav",
    swipe: "/static/audio/swipe.wav",
    tap: "/static/audio/tap.wav",
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
