export default (lesson) => {
    lesson.name = _.capitalize(lesson.name);
    lesson.description = lesson.description.toLowerCase();
  };
  