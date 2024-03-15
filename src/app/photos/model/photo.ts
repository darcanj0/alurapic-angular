export class PhotoData {
  constructor(
    public readonly imageUrl: String,
    public readonly description: String,
  ) { }

  static fromApi(obj: any): PhotoData {
    return new PhotoData(obj.url, obj.description);
  }
}
