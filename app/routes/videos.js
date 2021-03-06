import Route from '@ember/routing/route';

export default class VideosRoute extends Route {
  model() {
    return [
      { title: `The Concierge of Vancouver`, subtitle: 'Full Trailer', url: "https://www.youtube.com/embed/68YkPMvv3pQ" },
      { title: 'Phone Teaser September 2016', url: 'https://www.youtube.com/embed/UeLUc-cc3IY' },
      { title: 'Concierge Chronicles: Behind the scenes of "The Concierge of Vancouver"', subtitle: 'VLOG #1', url: 'https://www.youtube.com/embed/-9xBhvD4odY'},
      { title: 'Concierge Chronicles: Behind the scenes of "The Concierge of Vancouver"', subtitle: 'VLOG #2 - Shaul Ezer - Playwright', url: 'https://www.youtube.com/embed/UGys3iuePb0'},
      { title: 'Concierge Chronicles: Behind the scenes of "The Concierge of Vancouver"', subtitle: 'VLOG #3 - Ian Farthing - Director', url: 'https://www.youtube.com/embed/PxMAtb-gOIo'},
      { title: 'Concierge Chronicles: Behind the scenes of "The Concierge of Vancouver"', subtitle: 'VLOG #4 - Elizabeth Kirkland - "Agnes Harrington"', url: 'https://www.youtube.com/embed/LTIL0JncLBw'},
      { title: 'Concierge Chronicles: Behind the scenes of "The Concierge of Vancouver"', subtitle: 'VLOG #5 - Frank Zotter - "Fred MacCashel"', url: 'https://www.youtube.com/embed/XArJPLPznnI'},
      { title: 'Concierge Chronicles: Behind the scenes of "The Concierge of Vancouver"', subtitle: 'VLOG #6 - Sharon Carndall - "Samantha Wright"', url: 'https://www.youtube.com/embed/_omyhSr1_nM'},
      { title: 'Concierge Chronicles: Behind the scenes of "The Concierge of Vancouver"', subtitle: 'VLOG #7 - Art Kitching - "Al Noseworthy"', url: 'https://www.youtube.com/embed/SOMod2sbP1s'},
    ];
  }
}
