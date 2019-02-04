/**
 * Quasar App Extension prompts script
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 */

module.exports = function () {
  return [
    {
      name: 'options',
      type: 'checkbox',
      required: true,
      message: 'Please choose the following options:',
      choices: [
        {
          name: 'Not sure what options we need yet',
          value: 'Nothing'
        }
      ]
    }
  ]
}
