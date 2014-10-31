Data Scraping using PHP: Chrome Extension
=================================

How to deploy?
--------------
- Create a folder with any name on your server and copy in it, the files available in "Server Side" folder.
- Open the file 'index.php' and edit the url in line 7 to whichever website you want to scrap the data from.
- Go to the client side folder, open the file manifest.json and on line 9, change the URL to DEPLOYMENT FOLDER'S full address
- In the same folder, open the file 'popup/js' and go to line 34. Change the URL to the address of your data scraping script written in PHP.
- Go to Chrome Extensions panel and load the folder titled "Client Side" into your browser as an unpacked extension in developer mode. This should now show the question that you've posted on Quora.

If there are any other queries, please post them as comments on quora itself. The link to the question relevant is provided below!

This is a repository created for hosting the source code in response to a question in Quora available at http://www.quora.com/How-can-we-make-a-Chrome-Extension-using-data-scraped-via-PHP-Is-it-possible.

