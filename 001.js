var wshell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");

MD();

function MD()
{
	var fullpath = 'C:\\Users\\wecan002vm\\AppData\\Local\\Microsoft\\Windows\\aaa';
	fso.CreateFolder(fullpath);
}