<div align="center">
 <h2>SYNAPSES</h2>
</div>
<p align="center">
  <img src="https://sbhack19-prod.s3.eu-central-1.amazonaws.com/public-resources/lobo.png">
</p>
<h2>Welcome to SYNAPSES!</h2>
<p align="center">
  <img src="https://sbhack19-prod.s3.eu-central-1.amazonaws.com/public-resources/team-logo.gif">
</p>
<div align="center">
  <h4>Live Demo - you can play around on: </h4>
  <a href="http://k19app.s3-website.eu-central-1.amazonaws.com/" target="_blank">http://k19app.s3-website.eu-central-1.amazonaws.com/</a>
</div>
<div align="center">
  <h4>The code:</h4>
  <a href="https://github.com/Vrq/SBHack-2019-team-Kuznyechik" target="_blank">https://github.com/Vrq/SBHack-2019-team-Kuznyechik</a>
</div>

#### What is the SYNAPSES platform?

SYNAPSES is a valuation platform that rewards users for accurately estimating price of any asset, including previously non-bankable assets, such as a piece of art.
The value of the asset is determined based on the wisdom of the crowd, stating that average opinion of the large group of people is more accurate than any expert.
The problem with existing valuation solutions is that they are centralised and traditionally made by a few experts, which leads to possibl mistakes or manipulations.

On SYNAPSES multiple users made reviews for assets and evaluate their price. Final price is determined as a weighted average of all reviews, where weight depends on the rating of the validator coming from how accurate were his previous valuations.
Anyone can submit any asset for valuation.

#### Example User Story

<p align="center">
  <img src="https://sbhack19-prod.s3.eu-central-1.amazonaws.com/public-resources/sbhdiagram.png">
</p>

#### Technology

We created a website using React that handles user pricture submissions. Using Metamask extention the website attaches the reward for the valuation. 
The website handles calls to Ethereum network and stores data on elastic AWS database.
