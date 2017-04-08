import { Component, OnInit } from '@angular/core';
import { vocab, Vocabulary } from 'app/characters/vocabulary';
import './stringExtensions';

@Component({
  selector: 'app-verb-conjugation',
  templateUrl: './verb-conjugation.component.html',
  styleUrls: ['./verb-conjugation.component.scss']
})
export class VerbConjugationComponent implements OnInit {

  vocabulary: Vocabulary[] = vocab;
  verbs: Vocabulary[];

  definition: string;
  type: string;
  dfKanji: string;
  paKanji: string;
  pnKanji: string;
  ptaKanji: string;
  ptnKanji: string;
  sKanji: string;
  dfHiragana: string;
  paHiragana: string;
  pnHiragana: string;
  ptaHiragana: string;
  ptnHiragana: string;
  sHiragana: string;
  constructor() {
    this.verbs = this.vocabulary.filter((v) => {
      return v.tags.includes('verb');
    });
  }

  ngOnInit() {
  }

  click(index: number) {
    this.populateVerb(this.verbs[index]);
  }
  select(vocab: Vocabulary) {
    this.populateVerb(vocab);
  }

  populateVerb(verb) {
    let verbType;
    let verbConjugate;

    if (!verb) {
      verbType = 'None found';
      if (verbType) { this.type = verbType; }
    } else {
      if (verb.tags.includes('ru-verb')) {
        verbType = 'ru-verb';
      } else if (verb.tags.includes('u-verb')) {
        verbType = 'u-verb';
      } else if (verb.tags.includes('irregular verb')) {
        verbType = 'irregular verb';
        if (verb.conjugateTo) {
          if (verb.conjugateTo === 'ru-u') { verbConjugate = 'ru-u-verb'; }
        }
      }

      if (verbType) { this.type = verbType; }
      if (verb.kanji) { this.dfKanji = verb.kanji; }
      if (verb.hiragana) { this.dfHiragana = verb.hiragana; }
      if (verb.definition) { this.definition = verb.definition; }

      if (!verbConjugate) { verbConjugate = verbType; }
      let kanji, hiragana;
      if (verbConjugate === 'u-verb') {
        if (verb.kanji) { kanji = this.conjugateU(verb.kanji); }
        hiragana = this.conjugateU(verb.hiragana);
      } else if (verbConjugate === 'ru-verb') {
        if (verb.kanji) { kanji = this.conjugateRu(verb.kanji); }
        hiragana = this.conjugateRu(verb.hiragana);
      } else if (verbConjugate === 'ru-u-verb') {
        if (verb.kanji) { kanji = this.conjugateRuU(verb.kanji); }
        hiragana = this.conjugateRuU(verb.hiragana);
      }

      if (kanji) {
        this.paKanji = kanji.presentAff;
        this.pnKanji = kanji.presentNeg;
        this.ptaKanji = kanji.pastAff;
        this.ptnKanji = kanji.pastNeg;
        this.sKanji = kanji.stem;
      } else { this.resetKanji(); }

      if (hiragana) {
        this.paHiragana = hiragana.presentAff;
        this.pnHiragana = hiragana.presentNeg;
        this.ptaHiragana = hiragana.pastAff;
        this.ptnHiragana = hiragana.pastNeg;
        this.sHiragana = hiragana.stem;
      } else { this.resetHiragana(); }
    }
  }

  resetKanji() {
    this.paKanji = '';
    this.pnKanji = '';
    this.ptaKanji = '';
    this.ptnKanji = '';
    this.sKanji = '';
  }
  resetHiragana() {
    this.paHiragana = '';
    this.pnHiragana = '';
    this.ptaHiragana = '';
    this.ptnHiragana = '';
    this.sHiragana = '';
  }

  conjugateRu(verb: String) {
    return {
      presentAff: verb.destemRu().addMasu(),
      presentNeg: verb.destemRu().addMasen(),
      pastAff: verb.destemRu().addMashita(),
      pastNeg: verb.destemRu().addMasendeshita(),
      stem: verb.destemRu()
    };
  }

  conjugateU(verb: String) {
    return {
      presentAff: verb.destemU().addMasu(),
      presentNeg: verb.destemU().addMasen(),
      pastAff: verb.destemU().addMashita(),
      pastNeg: verb.destemU().addMasendeshita(),
      stem: verb.destemU()
    };
  }

  conjugateRuU(verb: String) {
    return {
      presentAff: verb.destemRu().destemU().addMasu(),
      presentNeg: verb.destemRu().destemU().addMasen(),
      pastAff: verb.destemRu().destemU().addMashita(),
      pastNeg: verb.destemRu().destemU().addMasendeshita(),
      stem: verb.destemRu().destemU()
    };
  }


  /*
  	var verbs = _.filter(vocab, function(obj) {
		return _.contains(obj.tags, 'verb');
	});

	$("input").on('keyup', _.debounce(function() {
		var val = $('input').val();
		var result = _.filter(verbs, function(verb){ return verb.kanji === val || verb.hiragana === val || verb.romaji === val || verb.katakana === val  || verb.definition === val || (typeof verb.definition === 'object' ? _.contains(verb.definition, val) : false); });
		if(result) populateVerb(result[0]);
		else populateVerb();
	}, 250));

	$.each(verbs, function(i,v) {
		$('#verbList').append('<li data-index="' + i + '">' + (v.kanji || v.hiragana) + '</li>');
	});

	$('#verbList').on('click', 'li', function(){
		$('input').val('');
		populateVerb(verbs[$(this).attr('data-index')])
	});
  */

}
