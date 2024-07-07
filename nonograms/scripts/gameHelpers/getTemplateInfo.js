import { templates } from "../templates.js";

export function getColumnHints(templateIndex) {
  const template = templates[templateIndex].template;
  let columnHints = {};

  for (let j = 0; j < template.length; j++) {
    let hint = "";
    let count = 0;

    for (let i = 0; i < template.length; i++) {
      if (template[i][j] === 1) {
        count++;
      } else if (template[i][j] === 0) {
        if (count > 0) {
          if (hint) {
            hint += " \n";
          }
          hint += count.toString();
        }

        count = 0;
      }
    }

    if (count > 0) {
      if (hint) {
        hint += " \n";
      }
      hint += count.toString();
    }
    columnHints[j] = [hint];
  }

  return columnHints;
}

export function getRowHints(templateIndex) {
  const template = templates[templateIndex].template;
  let rowHints = {};

  for (let i = 0; i < template.length; i++) {
    let hint = "";
    let count = 0;

    for (let j = 0; j < template.length; j++) {
      if (template[i][j] === 1) {
        count++;
      } else if (template[i][j] === 0) {
        if (count > 0) {
          if (hint) {
            hint += " ";
          }
          hint += count.toString();
        }

        count = 0;
      }
    }

    if (count > 0) {
      if (hint) {
        hint += " ";
      }
      hint += count.toString();  
    }
    rowHints[i] = [hint];
  }
  
  return rowHints;
}

export function getCountOfBlackCells(templateIndex) {
  const template = templates[templateIndex].template;

  let countOfBlackCells = 0;

  for (let i = 0; i < template.length; i++) {
    for (let j = 0; j < template.length; j++) {
      if(template[i][j] === 1) {
        countOfBlackCells++;
      }
    }
  }

  return countOfBlackCells;
}
