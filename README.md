# StatSleuth

A rapid way to comb through medical journal articles using Elasticsearch's full-text search engine.
2nd place winner of Medhacks 2021. Devpost link: https://devpost.com/software/statsleuth?ref_content=my-projects-tab&ref_feature=my_projects


# Inspiration

Medical and pharmaceutical research has become more important than ever in supporting health innovation and human health. However, practicing clinicians and researchers must consult a rapidly growing body of studies to find clinically relevant statistics. This “flood of information” diverts anywhere from 6-8 hours of a researcher’s time from collaborative research activities. An online, customizable query application tailored for health professionals & researchers would drastically reduce time spent reviewing health literature, increasing time spent on patient care and health innovation.

# What it does

StatSleuth allows the user to input any number of journal articles which our app then processes page by page. It scans each page for sentences that have relevant statistical content (p-values, confidence intervals, rates, etc.) and stores them individually in Elasticsearch, the world’s most popular enterprise search engine. This then allows the researcher to enter a text query to instantly get sentences containing statistical info from the article collection.

Enhancing the user experience further, StatSleuth uses fuzzy searching, where the exact words need not match, and provides a relevance score of each result with the user’s query. Users view search results of highest relevancy score first, expediting the time it takes to hunt statistical information relevant to clinical projects.

# How we built it

We built our service as a web app, using ReactJS, HTML, CSS for the front-end. The back-end was built using NodeJS, Express, a PDF parsing library, and Elasticsearch.

We used Elasticsearch as both our database and search engine for statistical text content in the medical journal articles. This tool was fundamental in creating a solution for making statistical content searchable in a fluid way, as we wanted users to be able to use fuzzy search, which is a way of returning results relevant to a query even if the query does not show up exactly word-for-word, kind of like Google search, along with a relevance score. This is made possible by Apache Lucene, one of the most widely used information retrieval libraries that powers the search feature of many websites, whose mathematical “practical scoring function” works under the hood of Elasticsearch.

# Challenges we ran into

One challenge we faced was deciding what sentences would be considered to contain statistics, and how it would be detected in a paper. For example, “The average dose of a medication is 2.5g” is important data, but a section heading numbered as 2.5 would result in a false positive as a statistic if we searched for the pattern number followed by a period followed by a number. We solved this problem by creating various nuanced regular expression rules to match and filter sentences for the various ways statistics could appear in papers.

# Accomplishments that we’re proud of

We are very pleased that we managed to integrate Elasticsearch, a complex and industry standard tool, into a functional web app in under a day that both works well and looks good.

We are also proud of leveraging each team-member’s unique skill set to create a project that would not be possible if made on our own.

# What we learned

We were all able to sharpen our web development skills learn how integrate new technologies outside of our comfort zone through guidance and pair programming.

# What’s next for StatSleuth

There are several exciting future directions for StatSleuth. The application can be enhanced with an analysis feature that will parse out specific statistical tests (Chi-square test values, ANOVA statistics, etc.) and flag anomalous statistics and the papers they belong to for the researcher.

Another further pathway is to add UI features to allow customizing our Elasticsearch integration. Elasticsearch’s search engine is highly customizable through built-in and custom “analyzers” that change the search algorithm for different use cases. Health science researchers who are unfamiliar with programming may find it useful to toggle “analyzers” via the UI to modify the search algorithm to be more adapted to their field of research.

