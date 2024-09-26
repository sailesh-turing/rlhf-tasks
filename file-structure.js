let folders = [
    "29590",
    "29677",
    "37286",
    "37297",
    "periodic-table-29755",
    "matrix-multiplication-29699",
    "add-in-bst-29803"
];

folders = folders.reverse();
const fileStructure = folders.map(folderName => {
    return {
        folder: folderName,
        files: ['modelA.html', 'modelB.html', 'idealResponse.html']
    };
});