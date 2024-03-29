export interface PhotoProps {
  url: string,
  description: string,
  readonly createdAt: Date,
  readonly id: number,
  likes: number,
  comments: number,
  allowComments: boolean,
  readonly userId: number;
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

  public get likes(): number {
    return this.props.likes;
  }

  public get comments(): number {
    return this.props.comments;
  }

  public get id(): number {
    return this.props.id;
  }

  static fromApi(obj: any): PhotoData {
    const model = new PhotoData({
      id: obj.id,
      userId: obj.userId,
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
