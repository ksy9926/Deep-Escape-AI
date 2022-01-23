import { Video, VideoModel } from '../model/video';

export class VideoService {
  public async create(video: Video): Promise<Video> {
    let v = new VideoModel(video);
    return await v.save();
  }

  public async find(): Promise<Video> {
    const videoData: any = await VideoModel.find();
    return videoData;
  }
}