import smtplib

class Contacts:
    def __init__(self, user_email):
        self.user_email = user_email
        self.supportEmail = "noreply@infixa.pt"

    def send_email(self, verificationCode):
        emailMsg = f"""\
                    Código de Verificação

                    O teu código de verificação de alteração de password é: {verificationCode}"""
        server = smtplib.SMTP('10.0.0.1')
        server.sendmail(self.supportEmail, self.user_email, emailMsg.encode("utf-8"))
        return