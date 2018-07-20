import getFilePath from '../../src/utils/getFilePath'
import path from 'path'

describe('getFilePath', () => {
    let basePath = null
    let defaultFilename = null

    beforeAll(() => {
        basePath = process.cwd()
        defaultFilename = 'selenium-standalone.txt'
    })

    it('should handle dir "./"', () => {
        const dir = './'
        const expectedPath = path.join(basePath, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle dir "/', () => {
        const dir = '/'
        const expectedPath = path.join(dir, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle dir "./log"', () => {
        const dir = './log'
        const expectedPath = path.join(basePath, dir, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle dir "/log', () => {
        const dir = '/log'
        const expectedPath = path.join(dir, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle dir "./log/"', () => {
        const dir = './log/'
        const expectedPath = path.join(basePath, dir, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle dir "/log/', () => {
        const dir = '/log/'
        const expectedPath = path.join(dir, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle dir "./log/selenium"', () => {
        const dir = './log/selenium'
        const expectedPath = path.join(basePath, dir, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle dir "log"', () => {
        const dir = 'log'
        const expectedPath = path.join(basePath, dir, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle dir "/log/selenium', () => {
        const dir = '/log/selenium'
        const expectedPath = path.join(dir, defaultFilename)
        const filePath = getFilePath(dir, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file ".log"', () => {
        const file = '.log'
        const expectedPath = path.join(basePath, file)
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file "./.log"', () => {
        const file = './.log'
        const expectedPath = path.join(basePath, file)
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file "./log/.log"', () => {
        const file = './log/.log'
        const expectedPath = path.join(basePath, file)
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file "./selenium-log.txt"', () => {
        const file = './selenium-log.txt'
        const expectedPath = path.join(basePath, file)
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file "selenium-log.txt"', () => {
        const file = 'selenium-log.txt'
        const expectedPath = path.join(basePath, file)
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file "/selenium-log.txt', () => {
        const file = '/selenium-log.txt'
        const expectedPath = file
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file "./log/selenium-log.txt"', () => {
        const file = './log/selenium-log.txt'
        const expectedPath = path.join(basePath, file)
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file "log/selenium-log.txt"', () => {
        const file = 'log/selenium-log.txt'
        const expectedPath = path.join(basePath, file)
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })

    it('should handle file "/log/selenium-log.txt', () => {
        const file = '/log/selenium-log.txt'
        const expectedPath = file
        const filePath = getFilePath(file, defaultFilename)

        expect(filePath).toBe(expectedPath)
    })
})