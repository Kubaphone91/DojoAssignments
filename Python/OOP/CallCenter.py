class Call(object):
    def __init__(self, unique, name, number, time, reason):
        self.uuid = unique
        self.name = name
        self.number = number
        self.time = time
        self.reason = reason

    def display(self):
        print "Unique ID: " + str(self.unique) + "\n" + "Caller Name: " + str(self.name) + "\n"+ "Caller Phone Number: " + str(self.number) + "\n"+ "Time of Call: " + str(self.time) + "\n"+ "Reason for Call: " + str(self.reason) + "\n"

call1 = Call(1, "Jake", "555-555-5555", "1:00am", "Complaint")
call2 = Call(2, "Kevin", "777-777-7777", "2:00pm", "Cancellation")
call3 = Call(3, "Tony", "999-999-9999", "6:30pm", "Complaint")

class CallCenter(object):
    def __init__(self):
        self.callList = []
        self.queueSize = 0

    def add(self, *callList):
        for call in callList:
            self.callList.append(call)
            self.queueSize = len(self.callList)
        return self

    def remove(self):
        del self.callList[0]
        self.queueSize = len(self.callList)
        return self

    def removeByNumber(self, number):
        for i in self.callList:
            if i.number == number:
                self.callList.remove(i)
                self.queueSize = len(self.callList)
                print "Removed " + str(i.number) + " from call list. \n"
        return self


    def showQueue(self):
		print "Current Queue:"
		for call in self.callList:
			print "Caller Name: " + str(call.name) + "\n" + "Phone Number: " + str(call.number) + "\n"
		print "Calls in Queue: " + str(self.queueSize)

callLog = CallCenter()

callLog.add(call1).add(call2).add(call3).removeByNumber("777-777-7777").showQueue()
