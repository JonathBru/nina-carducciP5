
module.exports = {

      content: ['index.html', './assets/bootstrap/**/*.js', './assets/*.js'],
      css: ['./assets/bootstrap/bootstrap.min.css','./assets/style.css'],
      safelist: {
        deep: [/^col-/],
        greedy: [/^col-/]
      },
      output: './purgedcss/',
      variables: true,

    }