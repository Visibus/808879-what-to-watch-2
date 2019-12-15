class AdapterComment {
  constructor(data) {
    this.id = data[`id`];
    this.user = {
      id: data[`user`][`id`],
      name: data[`user`][`name`],
    };
    this.rating = data[`rating`];
    this.comment = data[`comment`];
    this.date = data[`date`];
  }

  static parseComment(data) {
    return new AdapterComment(data);
  }

  static parseComments(data) {
    return AdapterComment.parseComment(data);
  }
}

export default AdapterComment;
