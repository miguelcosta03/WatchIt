import re
from string import punctuation

class DataValidator:
    @staticmethod
    def validateUsername(username):
        validUsername = None
        if len(username) > 0:
            for char in username:
                if char.isdigit():
                    validUsername = False
                    break
                if char in punctuation:
                    validUsername = False
                    break
                else:
                    validUsername = True
        else:
            validUsername = False

        return validUsername

    @staticmethod
    def validateEmail(email):
        validEmail = None
        regexEmail = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        if re.fullmatch(regexEmail, email):
            validEmail = True
        else:
            validEmail = False
        
        return validEmail