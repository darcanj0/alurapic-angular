export interface PhotoProps {
  url: string,
  description: string,
  readonly createdAt: Date,
  readonly id: string,
  likes: number,
  comments: number,
  allowComments: boolean,
  readonly authorId: string;
}

export class PhotoData {
  constructor(
    public props: PhotoProps
  ) { }

  public get url(): string {
    return this.props.url;
  }

  public get description(): string {
    return this.props.description;
  }

  static fromApi(obj: any): PhotoData {
    const model = new PhotoData({
      id: obj.id,
      authorId: obj.userId,
      likes: obj.likes,
      comments: obj.comments,
      allowComments: obj.allowComments,
      createdAt: new Date(),
      description: obj.description,
      url: obj.url
    });
    return model;
  }
}
