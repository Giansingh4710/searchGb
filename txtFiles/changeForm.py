

f=open("./txtFiles/form.txt","r")
lines=f.readlines()
f.close()
lines=[i[:-1] for i in lines if "http://" in i]

allLinks=[]
for line in lines:
    line=line.split(" : ")
    name,linkStuff=line[0]," : ".join(line[1:])
    allLinks.append(linkStuff)


def makeFile(file):
    f=open("./txtFiles/formsBylink.txt","w")
    for i in file:
        title,link=i.split(", http://")
        f.write(title+" : ")
        f.write("http://"+link+"\n")

makeFile(allLinks)