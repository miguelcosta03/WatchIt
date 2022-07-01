import hashlib

class Security:
    @staticmethod
    def encrypt(data):
        encryptedData = hashlib.sha256(data.encode('utf-8')).hexdigest()
        return encryptedData