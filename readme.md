# Final paper

This repository holds the final paper for my bachelor's degree in computer
science.

__The paper covers the feasibility of cross-browser and cross-devise tracking.__

The project is split into two parts:

1. White paper
2. Application

## White paper

The finished white paper in Croatian can be found [here](/zavrsni.pdf)
The coresponding LaTeX files can be found in the
[white paper folder](/white_paper).

To compile the LaTeX file you will need `bibtex` and `pdflatex`.

First run `pdflatex zavrsni.tex`, then `bibtex zavrsni`, and then
`pdflatex zavrsni.tex` two times in a row. This should generate `zavrsi.pdf` in
the same folder. The PDF should contain a table of contents and references.

## Application

The application that implements the described algorithms is a web application
written in Ruby using the Ruby on Rails framework.
