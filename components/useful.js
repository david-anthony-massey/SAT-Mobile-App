import { AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';

export const allQuestions = [
  'S10',
  'S11',
  'S12',
  'S13',
  'S14',
  'S15',
  'S16',
  'S17',
  'S18',
  'S19',
  'S110',
  'S111',
  'S112',
  'S113',
  'S114',
  'S115',
  'S116',
  'S117',
  'S118',
  'S119',
  'S120',
  'S121',
  'S122',
  'S123',
  'S124',
  'S125',
  'S126',
  'S127',
  'S128',
  'S129',
  'S130',
  'S131',
  'S132',
  'S133',
  'S134',
  'S135',
  'S136',
  'S137',
  'S138',
  'S139',
  'S140',
  'S141',
  'S142',
  'S143',
  'S144',
  'S145',
  'S146',
  'S147',
  'S148',
  'S149',
  'S150',
  'S151',
  'S20',
  'S21',
  'S22',
  'S23',
  'S24',
  'S25',
  'S26',
  'S27',
  'S28',
  'S29',
  'S210',
  'S211',
  'S212',
  'S213',
  'S214',
  'S215',
  'S216',
  'S217',
  'S218',
  'S219',
  'S220',
  'S221',
  'S222',
  'S223',
  'S224',
  'S225',
  'S226',
  'S227',
  'S228',
  'S229',
  'S230',
  'S231',
  'S232',
  'S233',
  'S234',
  'S235',
  'S236',
  'S237',
  'S238',
  'S239',
  'S240',
  'S241',
  'S242',
  'S243',
  'S30',
  'S31',
  'S32',
  'S33',
  'S34',
  'S35',
  'S36',
  'S37',
  'S38',
  'S39',
  'S310',
  'S311',
  'S312',
  'S313',
  'S314',
  'S315',
  'S316',
  'S317',
  'S318',
  'S319',
  'S40',
  'S41',
  'S42',
  'S43',
  'S44',
  'S45',
  'S46',
  'S47',
  'S48',
  'S49',
  'S410',
  'S411',
  'S412',
  'S413',
  'S414',
  'S415',
  'S416',
  'S417',
  'S418',
  'S419',
  'S420',
  'S421',
  'S422',
  'S423',
  'S424',
  'S425',
  'S426',
  'S427',
  'S428',
  'S429',
  'S430',
  'S431',
  'S432',
  'S433',
  'S434',
  'S435',
  'S436',
  'S437'
];

export const s1Questions = [
  'S10',
  'S11',
  'S12',
  'S13',
  'S14',
  'S15',
  'S16',
  'S17',
  'S18',
  'S19',
  'S110',
  'S111',
  'S112',
  'S113',
  'S114',
  'S115',
  'S116',
  'S117',
  'S118',
  'S119',
  'S120',
  'S121',
  'S122',
  'S123',
  'S124',
  'S125',
  'S126',
  'S127',
  'S128',
  'S129',
  'S130',
  'S131',
  'S132',
  'S133',
  'S134',
  'S135',
  'S136',
  'S137',
  'S138',
  'S139',
  'S140',
  'S141',
  'S142',
  'S143',
  'S144',
  'S145',
  'S146',
  'S147',
  'S148',
  'S149',
  'S150',
  'S151'
];

export const s2Questions = [
  'S20',
  'S21',
  'S22',
  'S23',
  'S24',
  'S25',
  'S26',
  'S27',
  'S28',
  'S29',
  'S210',
  'S211',
  'S212',
  'S213',
  'S214',
  'S215',
  'S216',
  'S217',
  'S218',
  'S219',
  'S220',
  'S221',
  'S222',
  'S223',
  'S224',
  'S225',
  'S226',
  'S227',
  'S228',
  'S229',
  'S230',
  'S231',
  'S232',
  'S233',
  'S234',
  'S235',
  'S236',
  'S237',
  'S238',
  'S239',
  'S240',
  'S241',
  'S242',
  'S243'
];

export const s3Questions = [
  'S30',
  'S31',
  'S32',
  'S33',
  'S34',
  'S35',
  'S36',
  'S37',
  'S38',
  'S39',
  'S310',
  'S311',
  'S312',
  'S313',
  'S314',
  'S315',
  'S316',
  'S317',
  'S318',
  'S319'
];

export const s4Questions = [
  'S40',
  'S41',
  'S42',
  'S43',
  'S44',
  'S45',
  'S46',
  'S47',
  'S48',
  'S49',
  'S410',
  'S411',
  'S412',
  'S413',
  'S414',
  'S415',
  'S416',
  'S417',
  'S418',
  'S419',
  'S420',
  'S421',
  'S422',
  'S423',
  'S424',
  'S425',
  'S426',
  'S427',
  'S428',
  'S429',
  'S430',
  'S431',
  'S432',
  'S433',
  'S434',
  'S435',
  'S436',
  'S437'
];

// function to check if answers have already been entered for this test and retrieve them
// -PROBLEM- needs to be test specific, if selecting a new test the old answers need to be overwritten with a warning.
function retrieveAnswers(requestedAsyncStorageData) {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getAsyncAnswers() {
    try {
      setLoading(true);
      const studentAnswers = await AsyncStorage.multiGet(
        requestedAsyncStorageData
      );
      setValue(studentAnswers);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAsyncAnswers();
  }, []);

  return [value, error, loading];
}

// exported function that uses retrieveAnswers
export function FetchAsyncStorageResource(requestedAsyncStorageData) {
  const [resourceName, error, loading] = retrieveAnswers(
    requestedAsyncStorageData
  );
  if (error) return `Failed to fetch ${resourceName}`;
  return loading ? 'Loading...' : resourceName;
}
