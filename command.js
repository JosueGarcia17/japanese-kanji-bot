const JishoApi = require('unofficial-jisho-api');
const jisho = new JishoApi();

async function kanjiSearch(kanji) {
    let kanjiInformation = '';
    let kanjiResult = '';
    let kanjiFound = false;
    
    await jisho.searchForKanji(kanji).then(result => {

        if(result.found) {
            kanjiFound = true;

            kanjiInformation = 'Meaning: [' + result.meaning + '] ' + '\nJLPT level: ' + result.jlptLevel
            + '\nKunyomi readings: ' + JSON.stringify(result.kunyomi) + '\nOnyomi readings: ' +
            JSON.stringify(result.onyomi) + '\nHow to write it: ' + result.strokeOrderGifUri;

        }  

    });
        
    if(kanjiFound) {
        kanjiResult = kanjiInformation;
    }
    else {
        kanjiResult = 'Kanji not found';
    }   
           
    return kanjiResult;
}

async function exampleSearch(kanji) {
    let test = '';
    await jisho.searchForExamples(kanji).then(result => {
        
        if(result.found) {
            test = 'Jisho Uri: ' + result.uri + '\n';

        for (let i = 0; i < 3; ++i) {
            let example = result.results[i];
            test += '\nWith kanji: ' + example.kanji + '\nKana only: ' + example.kana + '\nIn English: ' + example.english
            + '\n';
              
          }

        }
        
      });
      return test;
}

module.exports = {kanjiSearch, exampleSearch};
