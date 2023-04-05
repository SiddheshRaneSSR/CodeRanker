const clientId = 'de0f2d4a656c0880102d32a2c1a4611f';
const clientSecret = '994f332fa04648a77ae57f577c5ac046afa7e7c1e036ef2ce717878a6cd6f2a4';

const input = 'console.log("Hello, world!")';
const language = 'python3';
const versionIndex = '0';

axios.post('https://api.jdoodle.com/v1/execute', {
  clientId,
  clientSecret,
  script: input,
  language,
  versionIndex,
  stdin: '',
  
})
  .then((response) => {
    
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(response.data.output);
    document.getElementById('output').innerHTML = response.data.output;
  })
  .catch((error) => {
    console.error(error);
  });
