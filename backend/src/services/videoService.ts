import { Video, VideoModel } from '../model/video';

export class VideoService {
  public async findOne(type: string, selected: boolean): Promise<Video> {
    const videoData: Video = await VideoModel.findOne({type: type, selected: selected});

    console.log('findOne videoData: ', videoData)
    return videoData;
  }

  public async findAll(): Promise<Video> {
    const videoData: any = await VideoModel.find({});

    console.log('findOne videoData: ', videoData)
    return videoData;
  }

  public async create(video: Video): Promise<Video> {
    let v = new VideoModel(video);
    return await v.save();
  }

  public async update(videoId: number): Promise<Video> {
    const video: Video = await VideoModel.findOne({videoId: videoId})
    video.selected = false

    const videoData: Video = await VideoModel.findOneAndUpdate({ videoId: videoId }, video, { new: true });
    console.log('update videoData: ', videoData)
    return videoData;
  }
}