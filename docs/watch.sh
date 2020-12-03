open -a "Google Chrome" ./_build/html/index.html
fswatch -o ./ | xargs -n1 -I{} make html