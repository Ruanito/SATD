Install SATData web project

Download and install Docker -> https://www.docker.com/
1 - Execute in SATData folder project
	 $ docker build -t satdata .
	 $ docker run -p 8000:8080 satdata
2 - Open browser and put the address localhost:8000