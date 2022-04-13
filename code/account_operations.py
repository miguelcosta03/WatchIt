from random import randint

class AccountOperations:
    @staticmethod
    def generateNewVerificationCode():
        return randint(1000, 9999)