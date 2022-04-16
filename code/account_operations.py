from random import randint

class AccountOperations:
    @staticmethod
    def checkEmail(email):
        if len(email) == 0:
            return True
        else:
            return False
    
    @staticmethod
    def checkPassword(password):
        if len(password) == 0:
            return True
        else:
            return False

    @staticmethod
    def checkCredentialsSignUp(email, username, password, confirmPassword):
        if len(email) == 0 or len(username) == 0 or len(password) == 0 or len(confirmPassword) == 0:
            return True
        else:
            return False
    @staticmethod
    def generateNewVerificationCode():
        return randint(1000, 9999)