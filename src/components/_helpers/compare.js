export default {
  compare(a, b) {
    const dateA = a.date
    const dateB = b.date

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison
  }
}
