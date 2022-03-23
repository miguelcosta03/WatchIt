import smtplib
from random import randint
class Contacts:
    def __init__(self, user_email):
        self.user_email = user_email
        self.supportEmail = "watchitsatisfaction@gmail.com"
        self.supportPassword = "sla123456#"
        self.verificationCode = randint(1000, 9999)
    
    def returnVerificationCode(self):
        return self.verificationCode

    def send_email(self):
        emailMsg = f"""\
                    Verification Code

                    Your password reset verification code is: {self.verificationCode}"""
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(self.supportEmail, self.supportPassword)
        server.sendmail(self.supportEmail, self.user_email, emailMsg)
        server.close()