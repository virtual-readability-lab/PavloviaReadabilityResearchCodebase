# Pavlovia Readability Research Codebase

This project was developed by Kurtuluş Mert Küçük for scientific research purposes at Readability Lab, University of Central Florida. Software development was made on Psychopy, this allows online experimentation on Pavlovia platform. 

This project was developed for readability research that investigates the effect of typeface (i.e. font-family) on reading speed and comprehension. Main idea is to count words read per minute for different fonts and estimate the fastest and slowest fonts for each participant. Originally, experimentation was conducted with passages with the length of 160 to 300 words. However, one can modify this using the excel sheet provided in the “/stimuli” folder.

If you are interested in using this project in your research follow the procedure below:
• You will need Psychopy: get it here https://www.psychopy.org/download.html
• You will need to create a Pavlovia account: get it here https://www.pavlovia.org
• Create a local folder of the project on your PC. 
• Make a copy of the index.html file elsewhere, you will need to update it whenever you make changes in your experiment. Specifically, index.html file is reset whenever you synchronize your local folder and Pavlovia project. When your .html file on Pavlovia git is reset, copy the contents of original .html and paste it to online version. 

#Features
•Changing fonts: This is a three-set procedure, order of steps does not matter:
1)	Get .woff files for each font you want to use and place them in “fonts” folder. Change font directories and names in the .html file accordingly. 
2)	Also change the font names and labels in the “blocks_1.xlsx” sheet. Don’t forget to specify which fonts are for practice trials (first font) and which are test fonts (counterbalanced presentation order).
3)	Open Psychopy experiment file. Click on “waitForNormalization” routine. Click on “normalizationCode” component. Get to “Begin Experiment” tab. Change font names and directories in the “fontNames” and “fontDirectories” variables according to your new fonts. 

• Changing Passages: Open the excel sheet in “\stimuli” folder. Change the text under “pas1text,…,pasNtext” columns with the new passages. Be mindful that you’ll also need to change comprehension questions related to these passages. 

• Counterbalancing: Originally, there are 6 test fonts. The code counterbalances according to these 6 conditions. If you like to change the number of test fonts, you’ll also need to change counterbalancing code. This can be done by:
1)	Heading to Psychopy>”initialize” routine>variables. Increase or decrease the number of <if thisGroup.group> conditions according to your needs. 
2)	If you increase the conditions, head to Psychopy>”initialize” routine>functionsOnly. Increase the amount of letters in:
i.	var possible = "ABCDEF"(6 groups)
ii.	var possible = "ABCDEFGH" (8 groups) etc.




