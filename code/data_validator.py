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
