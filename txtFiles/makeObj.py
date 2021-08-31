
files=["articles.txt","formsByLink.txt","SikhUnityWordPress.txt"]

newObj=open("./txtFiles/obj.js","w")
newObj.write("export const links=[")
for file in files:
    f=open(f"./txtFiles/{file}","r")
    lines=f.readlines()
    f.close()

    for line in lines:
        title,link=line.split(" : http")
        newObj.write("{")
        if "\"" in title:
            title=title.replace("\"","\'")
        newObj.write(f"title : \"{title.lower()}\", link : \"http{link[:-1]}\"")
        newObj.write("},\n")
        
newObj.write("]")
newObj.close()