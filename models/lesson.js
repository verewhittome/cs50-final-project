class Lesson {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    download,
    description,
    isGCSE,
    isPrimary,
    isKindergarten,
    is4thGrade,
    is5thGrade
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.download = download;
    this.description = description;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGCSE = isGCSE;
    this.isPrimary = isPrimary;
    this.isKindergarten = isKindergarten;
    this.is4thGrade = is4thGrade;
    this.is5thGrade = is5thGrade;
  }
}

export default Lesson;
