/* 
Although js works synchronously, setTimeout() and fetch() are asynchronous. They don't maintain serial. When compiler sees fetch needs more time to load the data, it just goes to the next line and starts execution. At the sametime the loading of fetch also works. When the loading of fetch finishes, it shows the output then again starts execution from the last line it was working.
*/
