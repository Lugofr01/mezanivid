import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  //   lodash to take current items of stat page

  //   _.slice(items, startIndex);

  // ^^ method above ensures that data from array is taken and sliced for the start index

  // _.take()  we take  the data which ahs been sliced

  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();

  // This .value makes it an array
}
