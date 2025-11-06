const { getUsers } = require('../controllers/userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('User Controller - Unit Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of users successfully', async () => {
    const mockUsers = [
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Smith', email: 'jane@example.com' },
    ];
    User.find.mockResolvedValue(mockUsers);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getUsers(req, res);

    expect(User.find).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });

  it('should handle errors thrown by User.find', async () => {
    const error = new Error('Database failed');
    User.find.mockRejectedValue(error);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await getUsers(req, res, next);

    expect(User.find).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(error);
  });
});
