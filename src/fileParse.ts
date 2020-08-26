const fs = require('fs');

const readLine = () => {
  console.log('random func')
}

const main = (): void => {
  const filename = readLine();
  let totalSum = 0;
  let largeFiles = 0;

  const records: string = fs.readFileSync(filename, 'UTF-8');
  const recordList: string[] = records.split('\n');

  for (let record of recordList) {
    let recordArr = record.split(' ');
    let num = parseInt(recordArr[recordArr.length - 1]);

    if (num > 5000) {
      largeFiles++;
      totalSum += num;
    }
  }
  let newfileContent = largeFiles.toString() + '\n' + totalSum.toString();
  fs.writeFileSync(`bytes_${filename}`, newfileContent);
}
