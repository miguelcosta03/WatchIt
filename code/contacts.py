import smtplib

class Contacts:
    def __init__(self, user_email):
        self.user_email = user_email
        self.supportEmail = "watchitsatisfaction@gmail.com"
        self.supportPassword = "sla123456#"

    def send_email(self, verificationCode):
        emailMsg = f"""\
                    Código de Verificação

                    O teu código de verificação de alteração de password é: {verificationCode}"""
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(self.supportEmail, self.supportPassword)
        server.sendmail(self.supportEmail, self.user_email, emailMsg.encode("utf-8"))
        server.close()
        return